import { useRouter } from "next/router";
import Link from "next/link";

function Clients() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1> The Clients page </h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: `/clients/[id]/`,
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clients;
