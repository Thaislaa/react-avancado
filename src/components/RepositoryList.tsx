import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchRepositories } from "../store/slices/repositoriesSlices";

export function RepositoryList() {
    const dispatch = useAppDispatch();

    const { repositories, loading } = useAppSelector(
        (state) => state.repositories
    )

    const [userName, setUserName] = useState("");

    function handleSearch() {
        dispatch(fetchRepositories(userName))
    }

    return (
        <>
            <h1>Buscar Repositórios do GitHub </h1>
            <input type="text" value={userName} onChange={(event) => setUserName(event?.target.value)} />
            <button onClick={handleSearch}>Burscar</button>

            {loading && <p>Carregando...RepositoryList.</p>}

            <ul>
                {repositories.map((repository) => (
                    <li key={repository.id}>
                        <a href={repository.html_url} target="_blank">
                            {repository.name}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}