Feature: Página de Quiénes Somos (About)

  Scenario: Comprobar la información del equipo de desarrollo
    Given el usuario navega a "/about"
    Then debería ver el número de equipo "grupo Nº 4"
    And debería ver al miembro "Jose Antonio Verrire Maza" con una descripción que incluye "Líder técnico y especialista en la arquitectura completa. Fan de la eficiencia y el buen código (¡y de los revolucionarios!)."
    And debería ver al miembro "Victor Hugo Ponce" con una descripción que incluye "Encargado de la interfaz de usuario. Su estilo es afilado y preciso, asegurando que la web se vea perfecta en cualquier dispositivo."
    And debería ver al miembro "Nahir Carolina Torres" con una descripción que incluye "La doctora del código. Se asegura de curar cualquier bug y de que la calidad de la aplicación sea excelente antes del lanzamiento."