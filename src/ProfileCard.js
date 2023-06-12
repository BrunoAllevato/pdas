function ProfileCard({title, handle}) {
  // const title = props.title;
  // const handle = props.handle;
  // const { title, handle } = props; //same as the lines above
  return (
    <div>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
