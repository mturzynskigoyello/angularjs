﻿using System.Web.Http;

namespace Goyello.Angular.Stage_IV
{
	public class WebApiApplication : System.Web.HttpApplication
	{
		protected void Application_Start()
		{			
			GlobalConfiguration.Configure(WebApiConfig.Register);		
		}
	}
}
