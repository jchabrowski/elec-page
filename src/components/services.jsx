export const Services = (props) => {
  return (
    <div id="services">
      <div className="container">
        <div className="section-title">
          <h2>Usługi</h2>
          <p className="what-i-do">Na codzień wykonuję:</p>
          <div className="list-style">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <ul>
                {props.data
                  ? props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                  : 'loading'}
              </ul>
            </div>

            <div className="col-lg-4 col-sm-4 col-xs-12">
              <ul>
                {props.data
                  ? props.data.Why2.map((d, i) => (
                      <li key={`${d}-${i}`}> {d}</li>
                    ))
                  : 'loading'}
              </ul>
            </div>

            <div className="col-lg-4 col-sm-4 col-xs-12">
              <ul>
                {props.data
                  ? props.data.Why.map((d, i) => (
                      <li key={`${d}-${i}`}> {d}</li>
                    ))
                  : 'loading'}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
