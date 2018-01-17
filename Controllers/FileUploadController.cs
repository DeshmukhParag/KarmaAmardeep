using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using KarmaAmarDeep.Data;
using KarmaAmarDeep.ViewModels;
using System.Net.Http;
using System.IO;
using Newtonsoft.Json;
using System.Net;
using System.Text;
using KarmaAmarDeep.Models.Entities;
using Microsoft.Net.Http.Headers;

namespace KarmaAmarDeep.Controllers
{
  [Route("api/[controller]")]
  public class FileUploadController : Controller
  {
    private readonly ApplicationDbContext _appDbContext;

    public FileUploadController(ApplicationDbContext appDbContext)
    {
      _appDbContext = appDbContext;
    }

    //  [HttpPost]
    //  public HttpResponseMessage Post([FromBody]FileViewModel model)
    //  {

    //    //HttpResponseMessage result = null; 
    //    //var httpRequest = HttpContext
    //    //  if (httpRequest.Files.Count > 0)
    //    //{
    //    //  var docfiles = new List<string>();
    //    //  foreach (string file in httpRequest.Files)
    //    //  {
    //    //    var postedFile = httpRequest.Files[file];
    //    //    var filePath = HttpContext.Current.Server.MapPath("~/" + postedFile.FileName);
    //    //    postedFile.SaveAs(filePath);

    //    //    docfiles.Add(filePath);
    //    //  }
    //    //  result = Request.CreateResponse(HttpStatusCode.Created, docfiles);
    //    //}
    //    //else
    //    //{
    //    //  result = Request.CreateResponse(HttpStatusCode.BadRequest);
    //    //}
    //    //return result;

    //}

    [HttpPost]   
    public async Task Upload(long? id, IFormFile file)
    {
    //     if (file == null) throw new Exception("File is null");
    //     if (file.Length == 0) throw new Exception("File is empty");

    // // var uploads = Path.Combine(_environment.WebRootPath, "uploads");

    //  using (Stream stream = file.OpenReadStream())
    //    {
    //    using (var binaryReader = new BinaryReader(stream))
    //    {
    //      var fileContent = binaryReader.ReadBytes((int)file.Length);
    //      // await _appDbContext.images(fileContent, file.FileName, file.ContentType); 

    //      //  if (ModelState.IsValid)
    //      //  {
    //      //    bool isNew = true;
    //      //    image data = isNew ? new image
    //      //    {
    //      //      AddedDate = DateTime.UtcNow
    //      //    } : _appDbContext.images.Where(p => p.Id == id.Value).FirstOrDefault();

    //      //    data.fileContent = fileContent;
    //      //    data.IPAddress = Request.HttpContext.Connection.RemoteIpAddress.ToString();
    //      //    data.Modifieddate = DateTime.UtcNow;

    //      //    if (isNew)
    //      //    {
    //      //      _appDbContext.Add(data);
    //      //    }
    //      //    _appDbContext.SaveChanges();
    //      //  }

    //      //  return new OkObjectResult("Contact Created");
    //      //}  
    //    }
    //  }


     }

    //[HttpPost]
    //public ActionResult SendUserData(UserModel user)
    //{
    //  return Json(user);
    //}
    //public class UserModel
    //{
    //  public string Username { get; set; }

    //  public String FileData { get; set; }
    //}

   
  }
}