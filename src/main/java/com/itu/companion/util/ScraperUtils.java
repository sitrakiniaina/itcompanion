package com.itu.companion.util;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class ScraperUtils {
	public static String getOGImage(String url) throws Exception {
		try {
			Document document;
			document = Jsoup.connect(url).get();
			String rep= null;
			Elements elements = document.select("meta[property=og:image]");
			if(elements!=null) {
				if(elements.first()!=null) {
					rep = elements.first().attr("content");
				}
				
			}
				              
			return rep;
		} catch (Exception e) {
			throw e;
		}
	}
}
