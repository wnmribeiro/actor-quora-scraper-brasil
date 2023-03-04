# actor-quora-scraper-brasil
# O que faz ?

O Quora Scraper permite que você raspe perguntas encontradas na pesquisa e suas respostas. O resultado incluirá informações básicas para cada pergunta e resposta, incluindo seu conteúdo, urls, etc. Você pode usar esse Scraper de dados como uma API não oficial do Quora.

# Porque ?

O Quora é uma das maiores bases de conhecimento na Internet. Naturalmente, existem muitas maneiras de utilizar as informações que esse Scraper de dados forneceria.

Por exemplo, você pode simplesmente usá-lo para buscar rapidamente respostas que lhe interessam e armazená-las para referência futura. Ou, pode utilizar o conhecimento adquirido para pesquisas de negócios em uma área de domínio específica ou alimentar os dados em seus projetos acadêmicos de aprendizado de máquina.

Se sentir que este Scraper de dados está faltando alguma funcionalidade, sinta-se à vontade para entrar em contato

# Quanto custa ?

O custo do uso depende do tipo de proxy que você usa e do número de perguntas e respostas que são raspadas. Por exemplo, usando o proxy automático da Apify (Estados Unidos), o Scraper foi capaz de analisar 698 perguntas com suas respostas usando $0,131. Portanto, com o uso gratuito de $5 da Apify, você seria capaz de analisar 5 / 0,131 * 698 = ~26.000 perguntas.

# Como fazer?

1. Acesse [Quora Scraper Brasil](https://apify.com/wiliamribeiro/quora-brasil) ni Apify
2. Clique em **Try for free**
3. Experimente tags diferentes para pesquisa e selecione o proxy escolhido ao seu escopo.
4. Clique em Start/Iniciar
5. Quando a execução terminar, você verá a tabela de perguntas no conjunto de dados padrão, que pode ser exportado em qualquer formato desejado. Você verá as respostas para cada pergunta no armazenamento chave-valor padrão.

# Atributos de  Entrada

O Quora Scraper tem algumas opções de entrada obrigatórias: consulta de pesquisa (o Scraper a usará para encontrar perguntas e suas respostas) e configuração de proxy (sem usar proxy, muitas solicitações podem ser bloqueadas, portanto, certifique-se de selecionar algum; NOTA: o proxy residencial provavelmente não funcionará com este Scraper). Clique na guia Entrada para obter mais informações.

# Atributos de Saída

O Quora Scraper adicionará perguntas ao conjunto de dados padrão. Você pode baixar o conjunto de dados em vários formatos, como JSON, HTML, CSV ou Excel. Para cada pergunta, no armazenamento chave-valor padrão haverá uma entrada com a chave neste formato: qid_123456_answers, onde 123456 será substituído pelo qid real da pergunta (um dos campos extraídos pelo Scraper).