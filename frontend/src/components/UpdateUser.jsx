import { useMutation, useSubscription } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UpdateUser } from "../Apollo-Client";
import { toast } from "react-hot-toast";
import { GetAllUsers } from "./subscriptions";
import axios from "axios";
const UserUpdate = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  let data = JSON.parse(localStorage.getItem("users"));
  const GetAllUser =
    data && data.GetAllUsers.filter((user) => user.ID == id)[0];

  const { UserName, Email, Password, Profile } = GetAllUser;

  const [MyMutation] = useMutation(UpdateUser);

  const [user, setuser] = useState({
    UserName: UserName,
    Email: Email,
    Password: Password,
    Profile: "",
  });

  const HandleUpdate = async (e) => {
    e.preventDefault();
    const upload_preset = "wnx0tmuv";
    const cloud_name = "dcteurhwi";
    let formdata = new FormData();
    formdata.append("file", user.Profile);
    formdata.append("upload_preset", upload_preset);

    const { loading, error } = MyMutation({
      variables: {
        id: id,
        userEditInput: {
          UserName: user.UserName,
          Email: user.Email,
          Password: user.Password,
          Profile: user.Profile
            ? await axios
                .post(
                  `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
                  formdata
                )
                .then(({ data }) => data.secure_url)
            : Profile,
        },
      },
    });
    if (error) return alert(error.message);
    if (loading) return <h1>Loading </h1>;
    toast.success("Successfully Update User");
    setTimeout(() => {
      navigate("/user");
    }, 1000);
  };
  return (
    <div
      className="contaier d-flex align-items-center  text-center  justify-content-center  "
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "450px", borderRadius: "12px", height: "450px" }}
      >
        <div
          className="card-title   "
          style={{ fontSize: "38px", fontWeight: "600", position: "relative" }}
        >
          <strong>
            <img
              src={user.Profile ? URL.createObjectURL(user.Profile) : Profile}
              style={{
                width: "100px",
                borderRadius: "50%",
                height: "100px",
                marginTop: "10px",
              }}
            />
          </strong>

          <Link
            to="/User"
            className=" btn btn-danger mt-2 "
            style={{ position: "absolute", right: "12px" }}
          >
            X
          </Link>
        </div>
        <div className="card-body ">
          <form onSubmit={HandleUpdate}>
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

export default UserUpdate;
