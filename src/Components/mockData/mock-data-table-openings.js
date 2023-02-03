export const rows = [
    createData("Cupcake", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Donut", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Eclair", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Frozen", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Gingerbread", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Honeycomb", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Ice", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Jelly Bean", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("KitKat", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Lollipop", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Marshmallow", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Nougat", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Oreo", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Ice", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Jelly Bean", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("KitKat", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Lollipop", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Marshmallow", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Nougat", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Oreo", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Ice", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Jelly Bean", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("KitKat", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Lollipop", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Marshmallow", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Nougat", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Oreo", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Ice", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Jelly Bean", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("KitKat", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Lollipop", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Marshmallow", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Nougat", 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Oreo", 0, 0, 0, 0, 0, 0, 0, 0, 0),
  ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

  function createData(
  InternalRef,
  SelectedUnits,
  KingBeds,
  QueenBeds,
  DoubleBeds,
  SingleBeds,
  SofaBed,
  Kitchens,
  Bathrooms,
  MarktoOnboard
) {
  return {
    InternalRef,
    SelectedUnits,
    KingBeds,
    QueenBeds,
    DoubleBeds,
    SingleBeds,
    SofaBed,
    Kitchens,
    Bathrooms,
    MarktoOnboard,
  };
}