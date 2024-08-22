import profileImage from "../../images/profile.png";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  //   console.log({ skills: Object.keys(aboutMe[1].skills) });
  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={profileImage} className="rounded-lg w-96" alt="" />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {aboutMe.map((bio) => {
          console.log({ bio: bio?.skills });
          return (
            <p
              className={`mb-4 text-ternary-dark dark:text-ternary-light text-lg `}
              key={bio.id}
            >
              {bio.bio}
              {bio?.skills && Object.keys(bio?.skills).length > 0 ? (
                <>
                  <ol>
                    {Object.keys(bio?.skills).map((skill, index) => (
                      <li>
                        <span className="bolder">{skill}:</span>{" "}
                        {bio?.skills[skill]}
                      </li>
                    ))}
                  </ol>
                </>
              ) : null}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMeBio;
