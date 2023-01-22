const [data, setData] = useState(null);

const API =
  "http://serwer2227981.home.pl/autoinstalator/wordpress1/?rest_route=/wp/v2/pages";

useEffect(() => {
  fetch(`${API}`)
    .then((response) => response.json())
    .then((data) => {
      setData(data[0].content.rendered);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const handleClick = (e) => {
  e.preventDefault();
  navigate(e.target.id);
};

function createMarkup() {
  if (data) {
    return { __html: data };
  }
}
