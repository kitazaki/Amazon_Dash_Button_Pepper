import com.aldebaran.qi.Application;
import com.aldebaran.qi.Session;
import com.aldebaran.qi.helper.proxies.*;

public class SayHello8 {
	public static void main(String[] args) throws Exception {
		String robotUrl = "tcp://192.168.42.100:9559";
		Application application = new Application(args, robotUrl);
		application.start();
		Session session = application.session();
		ALAnimatedSpeech tts = new ALAnimatedSpeech(session);
		tts.say("\\RSPD=150\\ このアマゾンダッシュボタンは押しても商品は買えません");
	}
}

