function Loader({isLoading}) {
  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}
    </div>
  );
}

export default Loader;
