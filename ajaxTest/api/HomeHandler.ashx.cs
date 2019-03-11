using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.SessionState;
using ajaxTest.BLL;
using Newtonsoft.Json;
using ajaxTest.Infrustrues;

namespace ajaxTest.api
{
    /// <summary>
    /// HomeHandler 的摘要说明
    /// </summary>
    public class HomeHandler : IHttpHandler,IRequiresSessionState
    {
        BLL.GetDataBLL _bll = new GetDataBLL();
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
          
            var action = context.Request["action"];
            switch (action)
            {
                case "getdetail":
                    context.Response.Write(Get(context));
                    break;
            }
        }
    
        public dynamic Get(HttpContext context)
        {
            var start = context.Request["start"];
            var end = context.Request["end"];
            var page = context.Request["page"];
            var limit = context.Request["limit"];
            var id = context.Request["key[id]"];
            var list = _bll.GetData(Convert.ToDateTime(start), Convert.ToDateTime(end),Convert.ToInt32(page),Convert.ToInt32(limit),id);
            var resultJson = JsonConvert.SerializeObject(list, new JsonDateTimeConverter());//从实体类转化成json格式；
            return resultJson;
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