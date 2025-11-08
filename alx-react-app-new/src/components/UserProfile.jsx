function UserProfile(props) {
  return (
    <div
      style={{
        border: '2px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        margin: '15px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2 style={{ color: '#0077cc', fontSize: '24px' }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
