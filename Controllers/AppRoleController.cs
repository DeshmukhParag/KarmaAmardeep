using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using KarmaAmarDeep.Models.Entities;
using KarmaAmarDeep.ViewModels;
using Newtonsoft.Json;
using KarmaAmarDeep.Data;
using AutoMapper;

namespace KarmaAmarDeep.Controllers
{
  [Route("api/[controller]")]
  public class AppRoleController : Controller
  {

    private readonly RoleManager<AppRole> _roleManager; 
    private readonly JsonSerializerSettings _serializerSettings;
   


    public AppRoleController(RoleManager<AppRole> roleManager)
    {

      this._roleManager = roleManager; 
      
      _serializerSettings = new JsonSerializerSettings
      {
        Formatting = Formatting.Indented
      };

    }
    [HttpPost]
    public async Task<IActionResult> Post(string id, [FromBody]ApplicationRoleViewModel model)
    {
      if (ModelState.IsValid)
      {
        bool isExist = !String.IsNullOrEmpty(id);
        AppRole applicationRole = isExist ? await _roleManager.FindByIdAsync(id) :
       new AppRole
       {
         CreatedDate = DateTime.UtcNow
       };
        applicationRole.Name = model.RoleName;
        applicationRole.Description = model.Description;
        applicationRole.IPAddress = Request.HttpContext.Connection.RemoteIpAddress.ToString();
        IdentityResult roleRuslt = isExist ? await _roleManager.UpdateAsync(applicationRole)
                                            : await _roleManager.CreateAsync(applicationRole);
        if (roleRuslt.Succeeded)
        {
          // return RedirectToAction("Index");
          return new OkObjectResult("Role Created");
        }
      }
      return await Task.FromResult<IActionResult>(null);
    }
  }
}