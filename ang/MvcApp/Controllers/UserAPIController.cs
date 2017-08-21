using Newtonsoft.Json;
using System.Web.Http;
using System.Net.Http;
using System.Net;
using System.Text;
using MvcApp.Models;
using System.Collections.Generic;

namespace MvcApp.Controllers
{
    public class UserAPIController : BaseAPIController
    {
        //[HttpGet]
        //[Route("api/Userapi/GetData")]
        //public HttpResponseMessage GetData()
        //{
        //    List<data> code = new List<data>{
        //           new data{ TerritoryCode = 1, WarehouseCode = "Scott"},
        //           new data{TerritoryCode = 2, WarehouseCode = "Bill"}
        //           };

        //    return ToJson(code);
        //}
        [HttpGet]
        [Route("api/Userapi/GetName")]
        public HttpResponseMessage GetName(string name,int number)
        {
            data objData = new data();

            objData.number = NumberToWordConvertor.ConvertNumberToWord(number);
            objData.name = name;
             return ToJson(objData);
        }
        [HttpGet]
        //  http://localhost:51679/api/userapi/GetNameAndNumber?WCode=%22p%22
        // [Route("api/Userapi/GetNameAndNumber/wCode")]
        public HttpResponseMessage GetNameAndNumber(string WCode)
        {
            return ToJson(WCode);
        }

    }
}