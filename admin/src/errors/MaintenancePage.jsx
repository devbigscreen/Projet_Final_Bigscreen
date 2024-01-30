
const MaintenancePage = () => {
  return (
    <>
      <title>Site Maintenance</title>
      <style>
        {`
          body { text-align: center; padding: 150px; }
          h1 { font-size: 50px; margin-bottom: 20px; }
          body { font: 20px Helvetica, sans-serif; color: #333; }
          article { display: block; text-align: left; width: 650px; margin: 0 auto; }
          a { color: #dc8100; text-decoration: none; }
          a:hover { color: #333; text-decoration: none; }
        `}
      </style>

      <article>
        <h1 style={{ textAlign: 'center' }}>We&rsquo;ll be back soon!</h1>
        <div>
          <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:devbigscreen@gmail.com">contact us</a>, otherwise we&rsquo;ll be back online shortly!</p>
          <p>&mdash; Bigscreen</p>
        </div>
      </article>
    </>
  );
};

export default MaintenancePage;