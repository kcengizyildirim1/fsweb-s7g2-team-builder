const MemberListing = (props) => {
  const { memberProp } = props;

  return (
    <>
      <h3>Uyelerimiz</h3>
      <ul>
        {memberProp.map((member, i) => {
          return (
            <li key={i}>
              <a href={`mailto:${member.email}`}>{member.isim}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MemberListing;
