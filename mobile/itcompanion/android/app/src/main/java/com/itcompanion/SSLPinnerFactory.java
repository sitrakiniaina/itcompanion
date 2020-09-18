package com.itcompanion;
import com.facebook.react.modules.network.OkHttpClientFactory;
import com.facebook.react.modules.network.OkHttpClientProvider;

import okhttp3.CertificatePinner;
import okhttp3.OkHttpClient;

public class SSLPinnerFactory implements OkHttpClientFactory {
    private static String hostname = "https://192.168.8.112:8080";
    

    @Override
    public OkHttpClient createNewNetworkModuleClient() {
        String publickey = "sha256/MIIDdzCCAl+gAwIBAgIEWVzuVjANBgkqhkiG9w0BAQsFADBsMRAwDgYDVQQGEwdV";
        publickey+="bmtub3duMRAwDgYDVQQIEwdVbmtub3duMRAwDgYDVQQHEwdVbmtub3duMRAwDgYD";
        publickey+="VQQKEwdVbmtub3duMRAwDgYDVQQLEwdVbmtub3duMRAwDgYDVQQDEwdVbmtub3du";
        publickey+="MB4XDTIwMDkxNjE5NDM0N1oXDTMwMDkxNDE5NDM0N1owbDEQMA4GA1UEBhMHVW5r";
        publickey+="bm93bjEQMA4GA1UECBMHVW5rbm93bjEQMA4GA1UEBxMHVW5rbm93bjEQMA4GA1UE";
        publickey+="ChMHVW5rbm93bjEQMA4GA1UECxMHVW5rbm93bjEQMA4GA1UEAxMHVW5rbm93bjCC";
        publickey+="ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJlrXoXxIH+jfVtESxZmCkOn";
        publickey+="Y8B2ZA01VhwA4Gc9wJrqiPKSpTcAZpAqY8rcvTEW/Qh6Er3Zt/o+Xwl63Q28fZNA";
        publickey+="GoH2rPWnMUUsNhoU447aJsAHvxv+2P/4p0ISZ4ZqPxAX1gs8HJCVh51UJqwv1e1K";
        publickey+="7rvS21Ol3AkP9iRZ6z6qkWgh8UUPYONCIF82ujRSes2ilgHxLqOGZlALrjo5Xmu7";
        publickey+="BU9bPK27CkIJuNsrwppoc3CKIbib7SRJj6VWOrfpDNy0tqgUwhg0akOO9Y20uMKd";
        publickey+="dRltkql2MbWTIYMAw6u6Cv6C+QF/+Ok6tdJZ5EheWyUsuO8fT+LUTEevprxDGRMC";
        publickey+="AwEAAaMhMB8wHQYDVR0OBBYEFCCE+732eqerQ0bMc8AvmA4s5lCFMA0GCSqGSIb3";
        publickey+="DQEBCwUAA4IBAQBaesBuoKo9FIzr2KJwX1oNEvIKyslnCn6w6RVgA8Edqrm5UF7n";
        publickey+="NA8gJjS66LauK99ZvKl6pjrUEKnRdtOgTO+8YfJbNcbpk88gVD7PefL3mx/cRyTE";
        publickey+="usA+wBYz/iwr6my5fMo08ZMOow0Q0mJt3nbsAYIzvk+njWcP9oQGgdiBGwWQHj10";
        publickey+="ASD4h9Bm73WRKkrBGlH3WbVWJ7Yhx/phQVFyhJPwXfV0MvFwisS25Gd9OBhtCsFR";
        publickey+="WdGhBnFHnn+Dvek39qLDs8pNu7gS2dmX4jQ7s6rfNU8WThR1BWln729oAU4J+AZp";
        publickey+="Q0R6NzGW3+OE8RRQ7AH/d9MD5M92cbqVOvpt";
        CertificatePinner certificatePinner = new CertificatePinner.Builder()
                .add(hostname, publickey)
                .build();
        // Get a OkHttpClient builder with all the React Native defaults
        OkHttpClient.Builder clientBuilder = OkHttpClientProvider.createClientBuilder();
        return clientBuilder
                .certificatePinner(certificatePinner)
                .build();
    }
}