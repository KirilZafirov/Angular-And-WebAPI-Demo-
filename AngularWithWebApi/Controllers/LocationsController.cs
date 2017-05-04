using AngularWithWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using System.Web.OData;

namespace AngularWithWebApi.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    public class LocationsController : ApiController
    {
        // GET: api/Locations
       
        [ResponseType(typeof(Location))]
        public IHttpActionResult Get()
        {
            try
            {
                var locationRepository = new LocationRepository();
                return Ok(locationRepository.Retrieve());
            }
            catch (Exception ex)
            {

                return InternalServerError(ex);
            }
           
        }

        //public IEnumerable<Location> Get(string search)
        //{
        //    var locationRepository = new LocationRepository();
        //    var response = locationRepository.Retrieve();

        //    return response.Where(l => l.Place.Contains(search));
        //}

        // GET: api/Locations/5
        [ResponseType(typeof(Location))]
        
        public IHttpActionResult Get(int id)
        {
            try
            {
                Location location;
                var locationRepository = new LocationRepository();
                if (id > 0)
                {
                    var locations = locationRepository.Retrieve();
                    location = locations.FirstOrDefault(l => l.Id == id);
                    if (location == null)
                    {
                        return NotFound();
                    }
                }
                else
                {
                    location = locationRepository.Create();
                }
                return Ok(location);
            }
            catch (Exception ex)
            {

                return InternalServerError(ex);
            }
            
        }

        // POST: api/Locations
        [ResponseType(typeof(Location))]
        public IHttpActionResult Post([FromBody]Location location)
        {
            try
            {
                if (location == null)
                {
                    return BadRequest("Location can not be Null");
                }
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var locationRepository = new LocationRepository();
                var newLocation = locationRepository.Save(location);
                if (newLocation == null)
                {
                    return Conflict();
                }
                return Created<Location>(Request.RequestUri + newLocation.Id.ToString(), newLocation);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        // PUT: api/Locations/5
        public IHttpActionResult Put(int id, [FromBody]Location location)
        {
            try
            {
                if (location == null)
                {
                    return BadRequest("Location can not be Null");
                }
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var locationRepository = new LocationRepository();

                var updatedLocation = locationRepository.Save(id, location);
                if (updatedLocation == null)
                {
                    return NotFound();
                }
                return Ok();
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }          
        }

        // DELETE: api/Locations/5
        public void Delete(int id)
        {
        }
    }
}
