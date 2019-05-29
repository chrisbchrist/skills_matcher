
using DotNetNuke.Web.Api;
using System.Web.Http;

namespace CSPBC.Modules.SPA.Skills.Services
{

    /// <summary>
    /// The ServiceRouteMapper tells the DNN Web API Framework what routes this module uses
    /// </summary>
    public class ServiceRouteMapper : IServiceRouteMapper
    {
        /// <summary>
        /// RegisterRoutes is used to register the module's routes
        /// </summary>
        /// <param name="mapRouteManager"></param>
        public void RegisterRoutes(IMapRoute mapRouteManager)
        {
            mapRouteManager.MapHttpRoute(
                moduleFolderName: "CSPBC.Modules.SPA.Skills",
                routeName: "default",
                url: "{controller}/{itemId}",
                defaults: new { itemId = RouteParameter.Optional },
                namespaces: new[] { "CSPBC.Modules.SPA.Skills.Services" });
        }
    }

}