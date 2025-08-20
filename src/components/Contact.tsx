import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import { styles } from "../styles";
import { ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation()

  const handleChange = (e: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_wu2xdv8",
        "template_d3a44zp",
        {
          from_name: form.name,
          to_name: "Abdurauf",
          from_email: form.email,
          to_email: "aabdurauf004@gmail.com",
          message: form.message,
        },
        "b0KVtkzqD3MHi_Vae"
      )
      .then(
        () => {
          setLoading(false);
          alert(t("contact.alertMessage"));

          setForm({ name: "", email: "", message: "" });
        },
        error => {
          setLoading(false);

          console.log(error);

          alert(t("contact.alertError"));
        }
      );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainer()}
    >
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl shadow-lg dark:shadow-none"
        >
          <p className={`text-pink-500 ${styles.heroSubText}`}>{t("contact.subtitle")}</p>
          <h3 className={`${styles.heroHeadText} !text-white`}>{t("contact.title")}.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">{t("contact.nameLabel")}</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("contact.namePlaceholder")}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">{t("contact.emailLabel")}</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("contact.emailPlaceholder")}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">{t("contact.messageLabel")}</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact.messagePlaceholder")}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
