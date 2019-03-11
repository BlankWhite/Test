using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ajaxTest.Infrustrues;
using linq;
using Newtonsoft.Json;

namespace ajaxTest.BLL
{
    public class GetDataBLL
    {
        private readonly DAL.GetAccount _dal = new DAL.GetAccount();
  
        /// <summary>
        /// 
        /// </summary>
        /// <param name="start"></param>
        /// <param name="end"></param>
        /// <param name="page"></param>
        /// <param name="limit"></param>
        /// <param name="id"></param>
        /// <returns></returns>
        public dynamic GetData(DateTime start, DateTime end, int page, int limit, string id)
        {
            int count = 0;
            IEnumerable<MANIFEST> result = null;
            if (id != null)
            {
                 result = _dal.Get(start, end, page, limit,id, ref count);
            }
            else
            {
                
                 result = _dal.Get(start, end, page, limit, ref count);
            }
            if (limit * (page - 1) >= count)
            {
                page = (int)Math.Ceiling(((double)count) / limit);
                if (id != null)
                {
                    result = _dal.Get(start, end, page, limit,id, ref count);
                    
                }
                else
                {
                    result = _dal.Get(start, end, page, limit, ref count);
                }
            }
            return new
            {
                code = 0,
                msg = "",
                count,
                data = result
            };
        }
    }
}