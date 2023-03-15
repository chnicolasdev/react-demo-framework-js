import Form from "./Form";

const movies = [
  {
    name: "Rápido y furioso",
    available: 5
  },
  {
    name: "Titanic",
    available: 3
  },
  {
    name: "Avatar",
    available: 7
  }
];

export default function App() {
  return (
    <div>
      <h2>Películas</h2>
      {movies.map((movie) => (
        //<h3>{movie.name}</h3>
        //<form>
        //<h3>{movie.name}</h3>
        //<button> - </button>
        //0
        //<button> + </button>
        //</form>
        <Form movie={movie} />
      ))}
    </div>
  );
}
