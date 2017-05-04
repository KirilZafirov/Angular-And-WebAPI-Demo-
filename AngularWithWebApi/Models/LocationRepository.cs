using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;

namespace AngularWithWebApi.Models
{
    public class LocationRepository
    {
        internal Location Create()
        {
            Location location = new Location();
            return location;
        }
        internal List<Location> Retrieve()
        {
            var filePath = HostingEnvironment.MapPath(@"~/App_Data/location.json");

            var json = System.IO.File.ReadAllText(filePath);
            var locations = JsonConvert.DeserializeObject < List < Location >>(json);
            return locations;
        }
        internal Location Save(Location location)
        {
            var locations = this.Retrieve();

            var maxId = locations.Max(l => l.Id);
            location.Id = maxId + 1;
            locations.Add(location);

            WriteData(locations);
            return location;
        }
        internal Location Save(int id,Location location)
        {
            var locations = this.Retrieve();

            var locationIndex = locations.FindIndex(l => l.Id == location.Id);
            if(locationIndex > 0)
            {
                locations[locationIndex] = location;
            }
            else
            {
                return null;
            }

            WriteData(locations);
            return location;
        }

        private bool WriteData(List<Location> locations)
        {
            var filePath = HostingEnvironment.MapPath(@"~/App_Data/location.json");

            var json = JsonConvert.SerializeObject(locations, Formatting.Indented);

            System.IO.File.WriteAllText(filePath,json);

            return true;
        }
    }
}