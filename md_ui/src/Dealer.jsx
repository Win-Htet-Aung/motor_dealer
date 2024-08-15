function Dealer(params) {
  return (
    <li key={params.id}>
      <div style={{
          width: '500px',
          borderBottom: '1px solid #ddd',
        }}
      >
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: '10px',
            paddingRight: '10px',
            paddingTop: '10px',
          }}
        >
          <img src="http://localhost:8000/media/dealers/huawei.png" width="64px" height="64px" />
          <div style={{
              lineHeight: 0.5,
              marginTop: '-15px',
              textAlign: 'right',
            }}
          >
            <h2>Silva Group</h2>
            <p>FaBE-5299</p>
          </div>
        </div>
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                marginBottom: '-50px',
              }}
            >
              <p style={{fontWeight: 'bold', fontSize: '24px'}}>London</p>
              <p>1022</p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
              }}
            >
              <i>carmaster@example.com</i>
              <p>4.5 (123)</p>
            </div>
        </div>
      </div>
    </li>
  );
}

export default Dealer;
