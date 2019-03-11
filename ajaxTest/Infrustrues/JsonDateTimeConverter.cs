using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace ajaxTest.Infrustrues
{
    public class JsonDateTimeConverter : IsoDateTimeConverter
    {
        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            DateTime dataTime;
            if (DateTime.TryParse(reader.Value.ToString(), out dataTime))
            {
                return dataTime;
            }
            else
            {
                return existingValue;
            }
        }
        public JsonDateTimeConverter()
        {
            DateTimeFormat = "yyyy-MM-dd HH:mm:ss";
        }


    }
}