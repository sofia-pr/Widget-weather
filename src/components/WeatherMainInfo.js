import classes from './WeatherMainInfo.module.css';

const WeatherMainInfo = ({ weather }) => {
  return (
    <div className={classes.mainInfo}>
      <div className={classes.city}>{weather?.location.name}</div>
      <div className={classes.country}>{weather?.location.country}</div>
      <div className={classes.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="128"
            alt={weather?.current.condition.text}
          />
        </div>
        <div>
          <div className={classes.condition}>{weather?.current.condition.text}</div>
          <div className={classes.current}>{weather?.current.temp_c}°C</div>
        </div>
      </div>
      <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d317715.71195517684!2d${weather?.location.lon}007!3d${weather?.location.lat}4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1668201970974!5m2!1ses!2ses`}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default WeatherMainInfo;
