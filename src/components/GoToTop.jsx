const GoToTop = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="top-btn" onClick={goToBtn}>
      button
    </div>
  );
};

export default GoToTop;