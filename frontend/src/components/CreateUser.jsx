import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { CreateUser } from "../Apollo-Client";
const UserCreate = () => {
  const [user, setuser] = useState({
    UserName: "",
    Email: "",
    Password: "",
    Profile: "",
  });

  let navigate = useNavigate();
  const [MyMutation] = useMutation(CreateUser);
  const HandleUser = async (e) => {
    e.preventDefault();
    const upload_preset = "wnx0tmuv";
    const cloud_name = "dcteurhwi";
    let formdata = new FormData();
    formdata.append("file", user.Profile);
    formdata.append("upload_preset", upload_preset);

    try {
      let { error, loading, data } = MyMutation({
        variables: {
          userData: {
            UserName: user.UserName,
            Email: user.Email,
            Password: user.Password,
            Profile: user.Profile ? await axios
                  .post(
                    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
                    formdata
                  )
                  .then(({ data }) => data.secure_url)
              : "https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          },
        },
      });
      if (error) return alert(error.message);
      if (loading) return <h1>Loading </h1>;
      toast.success("Successfully Created User");
      setTimeout(() => {
        navigate("/user");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="contaier d-flex align-items-center  text-center  justify-content-center "
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "450px", borderRadius: "12px", height: "400px" }}
      >
        <div
          className="card-title   "
          style={{ fontSize: "38px", fontWeight: "600", position: "relative" }}
        >
          <strong>Create User</strong>
          <Link
            to="/User"
            className=" btn btn-danger mt-2 "
            style={{ position: "absolute", right: "12px" }}
          >
            X
          </Link>
        </div>
        <div className="card-body ">
          <form onSubmit={HandleUser}>
            <div className="row">
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Your Name"
                  value={user.UserName}
                  onChange={(e) =>
                    setuser({
                      ...user,
                      UserName: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your E-mail"
                  value={user.Email}
                  onChange={(e) =>
                    setuser({
                      ...user,
                      Email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Password"
                  value={user.Password}
                  onChange={(e) =>
                    setuser({
                      ...user,
                      Password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <label htmlFor="upload" className="form-control mt-4">
                  {user.Profile ? user.Profile.name : "Upload-Image"}
                </label>
                <input
                  type="file"
                  id="upload"
                  hidden
                  className="form-control mt-4"
                  onChange={(e) =>
                    setuser({
                      ...user,
                      Profile: e.target.files[0],
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "30%", margin: "0 auto" }}>
                <button
                  type="text"
                  className="form-control btn btn-primary mt-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserCreate;
