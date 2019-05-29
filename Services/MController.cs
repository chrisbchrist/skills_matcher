using System.Net.Http;
using DotNetNuke.Web.Api;
using DotNetNuke.Security;

namespace CSPBC.Modules.SPA.Skills.Services
{
    [SupportedModules("CSPBC.Modules.SPA.Skills")]
    [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.View)]

    public class MController : DnnApiController
    {
        public HttpResponseMessage HelloWorld()
        {
            string response = "Hello World";
            return Request.CreateResponse(response);
        }
    }
}
