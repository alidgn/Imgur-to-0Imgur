## VPN kullanmadan imgur resimlerini görüntüleme

Bildiğiniz üzere ülkemizde imgur.com adresine erişim engeli bulunmaktadır. Bu yüzden imgurda depolanan resimleri görüntülemekte sıkıntı yaşayabiliyoruz. Örneğin stackoverflow.com adresinde kullanıcıların yüklediği resimler varsayılan olarak imgur.com'da depolanmaktadır. Bu da kullanıcıların yüklediği resimlerin kırık şekilde gözükmesine neden olmaktadır. Böyle basit bir sorun için VPN kullanmak saçma olduğunu düşünerekten bu kodu yazdım. Yazdığım bu jQuery kodu, açtığınız sayfada imgur.com adresli resimlerin url'lerinin 0imgur.com olarak değişmesini sağlamaktadır. Bu işlem kullanıcı tarafında (client-side) uygulandığı için sayfayı yenilerseniz eski haline dönecektir.

Şimdi kodun nasıl çalıştığını açıklayayım:
> - Öncelikle tarayıcımızda yeni boş bir yer imi oluşturuyoruz.
> - Yer iminin adı kısmına kodu çağırmanız için gereken bir değer giriyorsunuz. Örn. "imgur resimlerini göster" gibi.
> - Yer iminin Url kısmına ise source.js dosyasındaki kodları yapıştırıyoruz. 
> - Yer imini kaydedip artık istediğiniz sitede yer imine verdiğiniz isim ile çağırabilirsiniz.
> - Denemek için [bu adrese](https://stackoverflow.com/questions/10744305/how-to-create-gitignore-file) girebilirsiniz.
> - Sayfa yüklendiğinde adres çubuğuna yer imine verdiğiniz adı yazınca size eklediğiniz kodu gösterecektir, seçip enterladığnızda kırık olan resim görünür olacaktır.

#### Adım 1

![res1](https://github.com/alidogangamuse/Imgur-to-0Imgur/blob/master/images/git-img-1.png?raw=true "res.1")

#### Adım 2
![res2](https://github.com/alidogangamuse/Imgur-to-0Imgur/blob/master/images/git-img-2.png?raw=true "res.2")

#### Adım 3
![res3](https://github.com/alidogangamuse/Imgur-to-0Imgur/blob/master/images/git-img-3.png?raw=true "res.3")
