const librosService = ($http) => {
    const baseurl = "http://localhost:9200/"
    return {
        listarTodos: () => {
            return $http({
                method: "GET",
                url: baseurl + "libros"
            })
        },
        buscar: (busqueda) => {
            return $http({
                method: "GET",
                url: baseurl + "libros/search?titulo=" + busqueda
            })
        },
        modificar: (libro) => {
            return $http({
                method: "PUT",
                url: baseurl + "libros/" + libro.id,
                data: libro
            })
        },
        agregar: (libro) => {
            return $http({
                method: "POST",
                url: baseurl + "libros",
                data: libro
            })
        },
        eliminar: (libro) => {
            return $http({
                method: "DELETE",
                url: baseurl + "libros/" + libro.id
            })
        }
    }
}
