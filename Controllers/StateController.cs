using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using KarmaAmarDeep.ViewModels;
using KarmaAmarDeep.Models.Entities;
using KarmaAmarDeep.Data;


namespace KarmaAmarDeep.Controllers
{
    [Route("api/[controller]")]
    public class StateController : Controller
    {


        private readonly ApplicationDbContext _appDbContext;

        public StateController(ApplicationDbContext appDbContext)
        {
          _appDbContext = appDbContext;
        } 


    [HttpPost]
    public IActionResult Post(Guid StateID, [FromBody]StateViewModel model)
    {
      if (ModelState.IsValid)
      {
        bool isNew = true;
        State data = isNew ? new State
        {
          //AddedDate = DateTime.UtcNow
        } : _appDbContext.States.Where(p => p.StateID == StateID).FirstOrDefault();

             data.CountryID = model.CountryID;
             data.StateName = model.StateName;
        if (isNew)
        {
          _appDbContext.Add(data);
        }
        _appDbContext.SaveChanges();
      }
      return new OkObjectResult("State Created");
    }
  }
}
