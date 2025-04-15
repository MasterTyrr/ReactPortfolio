using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static ReactPortfolio.Server.Services.DataRepositroy;

namespace ReactPortfolio.Server.Controllers
{
    public class ChatGPTController : Controller
    {
        private readonly IDataRepository _datarepo;

        public ChatGPTController(IDataRepository dataRepository)
        {
            _datarepo = dataRepository;
        }
        public string GetChatGptApiKey()
        {
            return _datarepo.GetAPIKey();
        }

        //// GET: ChatGPTController
        //public ActionResult Index(string)
        //{
        //    return View();
        //}

        // GET: ChatGPTController/Details/5
        public ActionResult Details(int id)
        {
            
            return View();
        }

        // GET: ChatGPTController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ChatGPTController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ChatGPTController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ChatGPTController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ChatGPTController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ChatGPTController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
