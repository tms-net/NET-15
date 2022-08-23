namespace TMS.NET15.FileServer
{
    static class LogWriter
    {
        public static async void WriteLogInFile(string logText)
        {
            using StreamWriter writer = new StreamWriter("\\log.txt");
            await writer.WriteLineAsync(logText);
        }
    }
}