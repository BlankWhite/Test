using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using linq;

namespace ajaxTest.DAL
{
    public class GetAccount
    {

private readonly  AccountDataContext _ctx = new AccountDataContext();
        /// <summary>
        /// 
        /// </summary>
        /// <param name="start">开始日期</param>
        /// <param name="end">截至日期</param>
        /// <returns></returns>
        public IEnumerable<MANIFEST> Get(DateTime start, DateTime end, int page , int limit, ref int count)
        {
            var list = _ctx.MANIFEST.Where(c => c.DATE >= start && c.DATE <= end);
            count = list.Count();
            list = list.Skip((page - 1) * limit).Take(limit);
            return list;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="start">开始日期</param>
        /// <param name="end">截至日期</param>
        /// <returns></returns>
        public IEnumerable<MANIFEST> Get(DateTime start, DateTime end, int page, int limit, string id, ref int count)
        {
            var list = _ctx.MANIFEST.Where(c => c.DATE >= start && c.DATE <= end&&c.ID.ToString().Contains(id));
            count = list.Count();
            list = list.Skip((page - 1) * limit).Take(limit);
            return list;
        }

    }
}