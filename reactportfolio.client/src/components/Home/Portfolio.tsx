import "tailwindcss";
function ListProjects() {
    return (<div className="grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(3,1fr)] gap-y-[10px] gap-x-[10px]">
        <div className="row-1 row-2 col-1 col-2 justify-self-stretch">1</div>
        <div className="row-1 row-2 col-2 col-3">2</div>
        <div className="row-1 row-2 col-3 col-4">3</div>
        <div className="row-2 row-3 col-1 col-2">4</div>
        <div className="row-2 row-3 col-2 col-3">5</div>
        <div className="row-2 row-3 col-3 col-4">6</div>
        <div className="row-3 row-4 col-1 col-2">7</div>
        <div className="row-3 row-4 col-2 col-3">8</div>
        <div className="row-3 row-4 col-3 col-4">9</div>
    </div>);
}
export default ListProjects;