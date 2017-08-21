using Newtonsoft.Json;
using System.Web.Http;
using System.Net.Http;
using System.Net;
using System.Text;
using MvcApp.Models;
using System.Collections.Generic;

namespace MvcApp.Controllers
{
    public class BaseAPIController : ApiController
    {
        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }
    }
}