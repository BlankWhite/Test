using System;
using System.Collections.Generic;
using System.Configuration;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;
using linq;

namespace ajaxTest
{
    /// <summary>
    /// IndexHandler 的摘要说明
    /// </summary>
    public class IndexHandler : IHttpHandler
    {
        TestDataClassesDataContext ctx = new TestDataClassesDataContext();
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");
            //context.Response.Write(GetTestNo(context));
            var action = context.Request["action"];

            switch (action)
            {
                case "add":
                    context.Response.Write(Add(context));
                    break;
                case "get":
                    context.Response.Write(Get(context));
                    break;

            }
        }

        public dynamic Get(HttpContext context)
        {
            var result = "";
            var resultData = ctx.ajaxTest;
            result = Newtonsoft.Json.JsonConvert.SerializeObject(resultData);//从实体类转化成json格式；
            return new
            {
                code=200,
                data=result
            };

        }
        public string Add(HttpContext context)
        {
            bool isSavedSuccessfully = true;
            int count = 0;
            string msg = "";
            var res = "";
            string fileName = "";
            string fileExtension = "";
            string filePath = "";
            string fileNewName = "";
            try
            {
                string directoryPath =context.Server.MapPath("~/file");
               // string directoryPath =  ConfigurationManager.AppSettings["PhysicsObjectPath"];
                if (!Directory.Exists(directoryPath))
                    Directory.CreateDirectory(directoryPath);

                foreach (string f in context.Request.Files)
                {
                    var file =context.Request.Files[f];

                    if (file != null && file.ContentLength > 0)
                    {
                        fileName = file.FileName;
                        fileExtension = Path.GetExtension(fileName);
                        fileNewName = Guid.NewGuid().ToString() + fileExtension;
                        filePath = Path.Combine(directoryPath, fileNewName);
                        file.SaveAs(filePath);

                        count++;
                    }
                }
            }
            catch (Exception ex)
            {
                msg = ex.Message;
                isSavedSuccessfully = false;
            }

            return "{\"filepath\":\"" + filePath + "\", \"data\":\"操作成功!" + fileNewName + "}"; ;
        }
        public string uploadfile(HttpContext context)
        {
            var res = "";
            var files = context.Request["file"];
            HttpPostedFile file = HttpContext.Current.Request.Files["file"];
            return res;
        }
        public string GetTestNo(HttpContext context)
        {
            var res = "[[\"\",\"--請選擇--\"],";
            var testname = context.Request["testname"];
            var ctx = new TestDataClassesDataContext();
            var list = ctx.ajaxTest.Where(c => c.TestName == testname);
            foreach (var q in list)
            {
                res += "[\"" + q.TestNo + "\",\"" + q.TestNo + "\"],";
            }
            res = res.Substring(0, res.Length - 1);
            res += "]";

            return res;

        }

        public string GetBase64(string data)
        {
            var res = "";
            var tmpfs = data;
            Base64StringToImage(tmpfs);
            return res;
        }
        private void Base64StringToImage(string txtFileName)
        {
            try
            {
                FileStream ifs = new FileStream(txtFileName, FileMode.Open, FileAccess.Read);
                StreamReader sr = new StreamReader(ifs);

                String inputStr = sr.ReadToEnd();
                byte[] arr = Convert.FromBase64String(inputStr);
                MemoryStream ms = new MemoryStream(arr);
                Bitmap bmp = new Bitmap(ms);

                //bmp.Save(txtFileName + ".jpg", System.Drawing.Imaging.ImageFormat.Jpeg);
                //bmp.Save(txtFileName + ".bmp", ImageFormat.Bmp);
                //bmp.Save(txtFileName + ".gif", ImageFormat.Gif);
                //bmp.Save(txtFileName + ".png", ImageFormat.Png);
                ms.Close();
                sr.Close();
                ifs.Close();
                //this.pictureBox2.Image = bmp;
                if (File.Exists(txtFileName))
                {
                    File.Delete(txtFileName);
                }
                //MessageBox.Show("转换成功！");
            }
            catch (Exception ex)
            {
                //MessageBox.Show("Base64StringToImage 转换失败\nException：" + ex.Message);
            }
        }
        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}