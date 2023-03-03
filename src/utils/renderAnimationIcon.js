import Animation from "components/Shared/Animation";

export const renderAnimationIcon = (data) => {
  return data.map((dataItem, index) => (
    <Animation data={dataItem} key={`animate-${index}`} />
  ));
};
