using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using KarmaAmarDeep.Data;
using Microsoft.AspNetCore.Identity;
using KarmaAmarDeep.ViewModels;
using KarmaAmarDeep.Models.Entities;
using Newtonsoft.Json;

namespace KarmaAmarDeep.Controllers
{
   
    [Route("api/[controller]")] 
    public class ContactsController : Controller
    {

      private readonly ApplicationDbContext _appDbContext;

        public ContactsController(ApplicationDbContext appDbContext)
        {
          _appDbContext = appDbContext;
        }

    //[HttpGet]
    //public IEnumerable<dynamic> Get()
    //{
    //    return _appDbContext.Contacts.ToList();
    //}
        //[HttpGet]
        //public IActionResult Index()
        // {
        //    List<ContactViewModel> model = new List<ContactViewModel>();
        //    model = _appDbContext.Contacts.Select(r => new ContactViewModel
        //    {
        //      Name = r.Name,
        //      Email = r.Email,             
        //      MobileNo = r.MobileNo,
        //      Location = r.Location,
        //      Message =r.Message
        //    }).ToList();
        //        var json = JsonConvert.SerializeObject(model);
        //        return new OkObjectResult(json);
        //}


        [HttpPost]
        public IActionResult Post(long? id , [FromBody] ContactViewModel model)
        {
            if(ModelState.IsValid)
             {
               bool isNew = true;
               Contact data = isNew ? new Contact
               {
                  AddedDate =DateTime.UtcNow
               } : _appDbContext.Contacts.Where(p => p.Id == id.Value).FirstOrDefault();

                data.Name = model.Name;
                data.Birthday = model.Birthday;
                data.Location = model.Location;
                data.Organization = model.Organization;
                data.Email = model.Email;
                data.MobileNo = model.MobileNo;
                data.Message = model.Message;
                data.IPAddress = Request.HttpContext.Connection.RemoteIpAddress.ToString();
                data.Modifieddate = DateTime.UtcNow;

                if (isNew)
                {
                 _appDbContext.Add(data);
                }
                _appDbContext.SaveChanges();
              }

             return new OkObjectResult("Contact Created");

        }
    }
}