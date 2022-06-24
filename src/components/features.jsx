export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container d-flex flex-col">
        <div>
          <h2>W czym Ci pomogę</h2>
        </div>
        <div className=" d-flex justify-content-center">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-4">
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  );
}
