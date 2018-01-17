using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using KarmaAmarDeep.Models.Entities;
using KarmaAmarDeep.ViewModels;
using Newtonsoft.Json;


namespace KarmaAmarDeep.Controllers
{
   
    [Route("api/[controller]")]
    public class ApplicationRoleController : Controller
    {
        private readonly RoleManager<AppRole> roleManager;
        private readonly JsonSerializerSettings _serializerSettings;

    public ApplicationRoleController(RoleManager<AppRole> roleManager)
    {
              this.roleManager = roleManager;
              _serializerSettings = new JsonSerializerSettings
              {
                Formatting = Formatting.Indented
              };
    }

        [HttpGet]
        public IActionResult Index()
        {
          List<ApplicationRoleListViewModel> model = new List<ApplicationRoleListViewModel>();
          model = roleManager.Roles.Select(r => new ApplicationRoleListViewModel
          {
            RoleName = r.Name,
            Id = r.Id,
            Description = r.Description,
            NumberOfUsers = r.Users.Count
          }).ToList();

        var json = JsonConvert.SerializeObject(model);
        return new OkObjectResult(json);
        }


    [HttpPost]
    public async Task<IActionResult> Post(string id, [FromBody]ApplicationRoleViewModel model)
    {
      if (ModelState.IsValid)
      {
        bool isExist = !String.IsNullOrEmpty(id);
        AppRole applicationRole = isExist ? await roleManager.FindByIdAsync(id) :
       new AppRole
       {
         CreatedDate = DateTime.UtcNow
       };
        applicationRole.Name = model.RoleName;
        applicationRole.Description = model.Description;
        applicationRole.IPAddress = Request.HttpContext.Connection.RemoteIpAddress.ToString();
        IdentityResult roleRuslt = isExist ? await roleManager.UpdateAsync(applicationRole)
                                            : await roleManager.CreateAsync(applicationRole);
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