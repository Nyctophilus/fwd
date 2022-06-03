/*
	3 main parts

	Header 		Payload 		signature


	using base64 Encoding algo

	Including Data in Our JWT Payload  <-- payload isnt scure, just verifing who make the request


		**header**
	{
	"alg":"HS256",
	"typ":"JWT"
	}
	
		**payload**
	{
	"user":"gabe",
	"school":"udacity",
	"role":"instructor"
	}

	{
	function(header,payload,SECRET)=SIGNATURE		    __ hs256
	}


*/

/*
	Validating JWT Authenticity

		HMACSHA256(
		base64encode(header)+"."+
		base64encode(payload),
		<< SECRET >>
		) = .asdsa.. the signature

		
	If the signature strings match, we can trust that the data within the JWT is authentic.
		
		*/

/*
		
		Install the dependency yarn add jsonwebtoken
		Import the library import jwt from'jsonwebtoken'
		Createatoken jwt.sign()
		Checkatoken jwt.verify()
		
		*/

/*
var token.=jwt.sign({user:newUser},process.env.TOKEN_SECRET);


*/
