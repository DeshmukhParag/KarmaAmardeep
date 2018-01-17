using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using KarmaAmarDeep.Data;
using KarmaAmarDeep.ViewModels;
using KarmaAmarDeep.Models.Entities;
using Newtonsoft.Json;
using System.IO;

namespace KarmaAmarDeep.Controllers
{
  [Route("api/[controller]")]
  public class StudentsController : Controller
  {

    private readonly ApplicationDbContext _appDbContext;

    public StudentsController(ApplicationDbContext appDbContext)
    {
      _appDbContext = appDbContext;
    }


    //[HttpGet]
    //public IEnumerable<dynamic> Get()
    //{
    //  // var user = User.Identity.Name;
    //  // return _context.Representatives.ToList();
    //  return _appDbContext.Students.ToList();
    //}

    [HttpGet]
    public IActionResult Index()
    {

      


      List<StudentViewModel> model = new List<StudentViewModel>();
      model = _appDbContext.Students.Select(r => new StudentViewModel
      {
        Id = r.Id,
        FirstName = r.FirstName,
        MiddleName = r.MiddleName,
        LastName = r.LastName,
        Gender = r.Gender,
        DateOfBirth = r.DateOfBirth,
        School = r.School,
        Address = r.Address,
        State = r.State,
        City = r.City,
        Taluka = r.Taluka,
        StudentPhoto = Convert.ToBase64String(r.StudentPhoto),
        MarksheetLastYear = Convert.ToBase64String(r.MarksheetLastYear),
     

      }).ToList();
      var json = JsonConvert.SerializeObject(model);
      return new OkObjectResult(model);
    }

    [HttpGet]
    [Route("GetDetails/{id?}")]
    public IActionResult GetDetails(int? id)
    {
      Student student = new Student();
      if(id.HasValue)
      { 

        student = _appDbContext.Students.Where(p => p.Id == id.Value).FirstOrDefault();
        if (student == null)
        {
          student = new Student();
        }
      }
      var json = JsonConvert.SerializeObject(student);
      //return new OkObjectResult(new { students = json }); 
      return new OkObjectResult(student);

    }

    [HttpPost]
    public IActionResult Post(long? id, [FromBody]StudentViewModel model)
    {
      if (ModelState.IsValid)
      {
        byte[] studentphoto = Convert.FromBase64String(model.StudentPhoto);
        byte[] marksheetLastYear = Convert.FromBase64String(model.MarksheetLastYear);

        bool isNew = true;
        Student student = isNew ? new Student
        {
          AddedDate = DateTime.UtcNow
        } : _appDbContext.Students.Where(p => p.Id == id.Value).FirstOrDefault();

        student.FirstName = model.FirstName;
        student.MiddleName = model.MiddleName;
        student.LastName = model.LastName;
        student.Gender = model.Gender;
        student.DateOfBirth = model.DateOfBirth;
        student.School = model.School;
        student.Standard = model.Standard;
        student.Achivements = model.Achivements;
        student.ParentMobileNumber = model.ParentMobileNumber;
        student.Nationality = model.Nationality;
        student.Address = model.Address;        
        student.State = model.State;
        student.City = model.City;
        student.Taluka = model.Taluka;
        student.StudentPhoto = studentphoto;
        student.MarksheetLastYear = marksheetLastYear;
        student.IPAddress = Request.HttpContext.Connection.RemoteIpAddress.ToString();
        student.Modifieddate = DateTime.UtcNow;
        student.RepresentativeId = model.RepresentativeId;

        if (isNew)
        {
          _appDbContext.Add(student);
        }
        _appDbContext.SaveChanges();
      }
      return new OkObjectResult("Student Created");

    }


  }
}