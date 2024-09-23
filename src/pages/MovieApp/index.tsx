import React from "react";
import Card from "./Card";
import "./index.scss";

export default function MovieApp() {
  const movies = [
    {
      id: 1,
      title: "Deadpoll & Wolverine",
      picture:
        "https://image.tmdb.org/t/p/w1280/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
      rate: 7.7,
      overview:
        "Deadpool and Wolverine are back together for one last mission. Deadpool must defeat the evil Cable and his Clan before it's too late. The battle for the future begins now! ",
    },
    {
      id: 2,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo's novel of the same name, focuses on the powerful Italian'n Don Vito Corleone (Marlon Brando) and his son Michael (Al Pacino), who after the Corleone family's attempted assassination are both sent to prison.",
    },
    {
      id: 3,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 4,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 5,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 6,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 7,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 8,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 9,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 10,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 11,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 12,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 13,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 14,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 15,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 16,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 17,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 18,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 19,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
    {
      id: 20,
      title: "The Godfather",
      picture:
        "https://image.tmdb.org/t/p/w1280/865DntZzOdX6rLMd405R0nFkLmL.jpg",
      rate: 9.2,
      overview:
        "Widely regarded as one of the greatest films of all time, this mob drama, based onMario Puzo'snovel of the same name, focuses on the powerful Italian'n Don Vito",
    },
  ];

  return (
    <div className="all-wrap">
      <head className="head-bar">
        <div className="search">
          <input type="search" name="search" placeholder="Search" />
        </div>
      </head>
      <div className="container-wrap">
        {movies.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
