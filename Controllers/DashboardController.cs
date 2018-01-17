using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace KarmaAmarDeep.Controllers
{

  [Authorize(Policy = "ApiUser")]
  [Route("api/[controller]")]
  public class DashboardController : Controller
  {
    public DashboardController()
    {

    }

    // GET api/dashboard/home
    [HttpGet("home")]
    public IActionResult GetHome()
    {
      return new OkObjectResult(new { Message = "This is secure data!" });
    }
  }
}