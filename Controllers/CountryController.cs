using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using KarmaAmarDeep.Models.Entities;
using KarmaAmarDeep.ViewModels;
using KarmaAmarDeep.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace KarmaAmarDeep.Controllers
{
    [Route("api/[controller]")]
    public class CountryController : Controller
    {

    private readonly ApplicationDbContext _appDbContext;

    public CountryController(ApplicationDbContext appDbContext)
    {
      _appDbContext = appDbContext;
    } 

    // GET: api/values
    [HttpGet]
        public IActionResult Get()
        {
            List<CountryViewModel> model = new List<CountryViewModel>();
            model = _appDbContext.Countries.Select(r => new CountryViewModel
            {
                CountryId = r.CountryID,
                CountryName=r.CountryName  
            }).ToList();
            // var json = JsonConvert.SerializeObject(model);
            return new OkObjectResult(model);
        }

    [HttpPost]
    public IActionResult Post(Guid countryId, [FromBody]CountryViewModel model)
    {
      if (ModelState.IsValid)
      {
        bool isNew = true;
        Country data = isNew ? new Country
        {
          //AddedDate = DateTime.UtcNow
        } : _appDbContext.Countries.Where(p => p.CountryID == countryId).FirstOrDefault();

        data.CountryName = model.CountryName;      

        if (isNew)
        {
          _appDbContext.Add(data);
        }
        _appDbContext.SaveChanges();
      }
      return new OkObjectResult("Country Created");
    }
  }
}
