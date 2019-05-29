/*
' Copyright (c) 2018 DnnFree.com
'  All rights reserved.
' 
' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
' TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
' THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
' CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
' DEALINGS IN THE SOFTWARE.
' 
*/

using System.Collections.Generic;
//using System.Xml;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Services.Search;

namespace CSPBC.Modules.SPA.Skills.Components
{

    /// -----------------------------------------------------------------------------
    /// <summary>
    /// The Controller class for CSPBC.Modules.SPA.Skills
    /// 
    /// The FeatureController class is defined as the BusinessController in the manifest file (.dnn)
    /// DotNetNuke will poll this class to find out which Interfaces the class implements. 
    /// 
    /// The IPortable interface is used to import/export content from a DNN module
    /// 
    /// The ISearchable interface is used by DNN to index the content of a module
    /// 
    /// The IUpgradeable interface allows module developers to execute code during the upgrade 
    /// process for a module.
    /// 
    /// Below you will find stubbed out implementations of each, uncomment and populate with your own data
    /// </summary>
    /// -----------------------------------------------------------------------------

    //uncomment the interfaces to add the support.
    public class FeatureController //: IPortable, ISearchable, IUpgradeable
    {


        #region Optional Interfaces

        /// -----------------------------------------------------------------------------
        /// <summary>
        /// ExportModule implements the IPortable ExportModule Interface
        /// </summary>
        /// <param name="ModuleID">The Id of the module to be exported</param>
        /// -----------------------------------------------------------------------------
        //public string ExportModule(int ModuleID)
        //{
        //string strXML = "";

        //List<CSPBC.Modules.SPA.SkillsInfo> colCSPBC.Modules.SPA.Skillss = GetCSPBC.Modules.SPA.Skillss(ModuleID);
        //if (colCSPBC.Modules.SPA.Skillss.Count != 0)
        //{
        //    strXML += "<CSPBC.Modules.SPA.Skillss>";

        //    foreach (CSPBC.Modules.SPA.SkillsInfo objCSPBC.Modules.SPA.Skills in colCSPBC.Modules.SPA.Skillss)
        //    {
        //        strXML += "<CSPBC.Modules.SPA.Skills>";
        //        strXML += "<content>" + DotNetNuke.Common.Utilities.XmlUtils.XMLEncode(objCSPBC.Modules.SPA.Skills.Content) + "</content>";
        //        strXML += "</CSPBC.Modules.SPA.Skills>";
        //    }
        //    strXML += "</CSPBC.Modules.SPA.Skillss>";
        //}

        //return strXML;

        //	throw new System.NotImplementedException("The method or operation is not implemented.");
        //}

        /// -----------------------------------------------------------------------------
        /// <summary>
        /// ImportModule implements the IPortable ImportModule Interface
        /// </summary>
        /// <param name="ModuleID">The Id of the module to be imported</param>
        /// <param name="Content">The content to be imported</param>
        /// <param name="Version">The version of the module to be imported</param>
        /// <param name="UserId">The Id of the user performing the import</param>
        /// -----------------------------------------------------------------------------
        //public void ImportModule(int ModuleID, string Content, string Version, int UserID)
        //{
        //XmlNode xmlCSPBC.Modules.SPA.Skillss = DotNetNuke.Common.Globals.GetContent(Content, "CSPBC.Modules.SPA.Skillss");
        //foreach (XmlNode xmlCSPBC.Modules.SPA.Skills in xmlCSPBC.Modules.SPA.Skillss.SelectNodes("CSPBC.Modules.SPA.Skills"))
        //{
        //    CSPBC.Modules.SPA.SkillsInfo objCSPBC.Modules.SPA.Skills = new CSPBC.Modules.SPA.SkillsInfo();
        //    objCSPBC.Modules.SPA.Skills.ModuleId = ModuleID;
        //    objCSPBC.Modules.SPA.Skills.Content = xmlCSPBC.Modules.SPA.Skills.SelectSingleNode("content").InnerText;
        //    objCSPBC.Modules.SPA.Skills.CreatedByUser = UserID;
        //    AddCSPBC.Modules.SPA.Skills(objCSPBC.Modules.SPA.Skills);
        //}

        //	throw new System.NotImplementedException("The method or operation is not implemented.");
        //}

        /// -----------------------------------------------------------------------------
        /// <summary>
        /// GetSearchItems implements the ISearchable Interface
        /// </summary>
        /// <param name="ModInfo">The ModuleInfo for the module to be Indexed</param>
        /// -----------------------------------------------------------------------------
        //public DotNetNuke.Services.Search.SearchItemInfoCollection GetSearchItems(DotNetNuke.Entities.Modules.ModuleInfo ModInfo)
        //{
        //SearchItemInfoCollection SearchItemCollection = new SearchItemInfoCollection();

        //List<CSPBC.Modules.SPA.SkillsInfo> colCSPBC.Modules.SPA.Skillss = GetCSPBC.Modules.SPA.Skillss(ModInfo.ModuleID);

        //foreach (CSPBC.Modules.SPA.SkillsInfo objCSPBC.Modules.SPA.Skills in colCSPBC.Modules.SPA.Skillss)
        //{
        //    SearchItemInfo SearchItem = new SearchItemInfo(ModInfo.ModuleTitle, objCSPBC.Modules.SPA.Skills.Content, objCSPBC.Modules.SPA.Skills.CreatedByUser, objCSPBC.Modules.SPA.Skills.CreatedDate, ModInfo.ModuleID, objCSPBC.Modules.SPA.Skills.ItemId.ToString(), objCSPBC.Modules.SPA.Skills.Content, "ItemId=" + objCSPBC.Modules.SPA.Skills.ItemId.ToString());
        //    SearchItemCollection.Add(SearchItem);
        //}

        //return SearchItemCollection;

        //	throw new System.NotImplementedException("The method or operation is not implemented.");
        //}

        /// -----------------------------------------------------------------------------
        /// <summary>
        /// UpgradeModule implements the IUpgradeable Interface
        /// </summary>
        /// <param name="Version">The current version of the module</param>
        /// -----------------------------------------------------------------------------
        //public string UpgradeModule(string Version)
        //{
        //	throw new System.NotImplementedException("The method or operation is not implemented.");
        //}

        #endregion

    }

}
