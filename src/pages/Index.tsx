import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Scissors" size={28} className="text-primary" />
              <span className="font-heading font-bold text-xl">Leather Workshop</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Главная', 'Услуги', 'Портфолио', 'О мастерской', 'Контакты'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(['home', 'services', 'portfolio', 'about', 'contacts'][idx])}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 text-balance">
            Leather Workshop
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Изделия из кожи ручной работы
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Каждое изделие создается вручную с вниманием к деталям и любовью к ремеслу
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
          >
            Смотреть работы
          </Button>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-card">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16">
            Услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Wrench',
                title: 'Индивидуальный пошив',
                description: 'Создаем изделия по вашим эскизам и пожеланиям. Учитываем все детали для идеального результата.'
              },
              {
                icon: 'Sparkles',
                title: 'Реставрация',
                description: 'Восстанавливаем любимые вещи, даем вторую жизнь изделиям из кожи любой сложности.'
              },
              {
                icon: 'Palette',
                title: 'Окрашивание и декор',
                description: 'Профессиональное окрашивание, тиснение и декорирование кожаных изделий.'
              }
            ].map((service, idx) => (
              <Card key={idx} className="bg-background border-border hover:border-primary transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <Icon name={service.icon} size={48} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16">
            Портфолио
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://cdn.poehali.dev/projects/6e24fcbe-d3cc-4962-8d0e-8a4bb9a182fb/files/511f2d48-a340-4e95-9a01-cdbbc2075cb1.jpg',
                title: 'Кошелек ручной работы',
                category: 'Аксессуары'
              },
              {
                image: 'https://cdn.poehali.dev/projects/6e24fcbe-d3cc-4962-8d0e-8a4bb9a182fb/files/20b16883-b760-4bac-b28e-f25e791fbb3f.jpg',
                title: 'Кожаная сумка',
                category: 'Сумки'
              },
              {
                image: 'https://cdn.poehali.dev/projects/6e24fcbe-d3cc-4962-8d0e-8a4bb9a182fb/files/106945fc-d9f6-42ff-82c4-b9a9c6b55e9d.jpg',
                title: 'Мастерская',
                category: 'Процесс'
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-primary text-sm font-semibold mb-2">{item.category}</p>
                  <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12">
            О мастерской
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Мы создаем изделия из натуральной кожи, используя традиционные методы ручного ремесла.
              Каждый предмет уникален и несет в себе частичку души мастера.
            </p>
            <p>
              Наша философия — качество превыше количества. Мы тщательно выбираем материалы,
              работаем только с натуральной кожей высшего качества и используем проверенные временем техники.
            </p>
            <p>
              В работе мы сочетаем традиционное мастерство с современным дизайном, создавая вещи,
              которые прослужат вам долгие годы и станут только лучше со временем.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: 'Award', text: '10+ лет опыта' },
              { icon: 'Heart', text: 'Ручная работа' },
              { icon: 'Shield', text: 'Гарантия качества' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <Icon name={item.icon} size={40} className="text-primary mx-auto mb-4" />
                <p className="font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12">
            Контакты
          </h2>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input
                    placeholder="Ваше имя"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    className="bg-background border-border"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                >
                  Отправить
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <Icon name="Mail" size={20} />
                  <span>contact@leatherworkshop.ru</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Icon name="Phone" size={20} />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Leather Workshop. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}